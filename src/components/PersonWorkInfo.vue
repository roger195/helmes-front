<template>
  <div class="header">
    <label> Helmes </label>
    <Button
      type="button"
      severity="secondary"
      label="Create Session"
      @click="createSession"
    ></Button>
  </div>

  <div class="card">
    <div>
      <div class="errors" v-if="errors">
        <InlineMessage
          severity="error"
          v-for="error in errors"
          v-bind:key="error"
          >{{ error }}</InlineMessage
        >
      </div>
      <InlineMessage severity="success" class="success" v-if="success"
        >Info successfully saved!</InlineMessage
      >
    </div>
    <form @submit.prevent="onSubmit">
      <label class="form-group head-text"
        >Please enter your name and pick the Sectors you are currently involved
        in.</label
      >
      <div class="form-group">
        <div class="form-group-label">
          <label>Name:</label>
          <InlineMessage v-if="v$.formData.name.$error" severity="error"
            >{{ v$.formData.name.$errors[0].$message }}
          </InlineMessage>
        </div>
        <InputText
          type="text"
          size="small"
          v-model="$store.state.formData.name"
        />
      </div>
      <div class="form-group">
        <div class="form-group-label">
          <label>Sectors:</label>
          <InlineMessage
            v-if="v$.formData.selectedSectors.$error"
            severity="error"
            >{{ v$.formData.selectedSectors.$errors[0].$message }}
          </InlineMessage>
        </div>
        <TreeSelect
          v-model="formData.selectedSectors"
          placeholder="Select sectors"
          selectionMode="multiple"
          :options="sectors"
        >
        </TreeSelect>
      </div>
      <InlineMessage v-if="v$.formData.isTermsAccepted.$error" severity="error"
        >{{ v$.formData.isTermsAccepted.$errors[0].$message }}
      </InlineMessage>
      <div class="agreement">
        <input
          class="radio"
          type="checkbox"
          v-model="formData.isTermsAccepted"
        />
        <label class="agreementText">Agree to terms</label>
      </div>
      <div class="button">
        <Button label="Save" type="submit" :disabled="isSessionIdNull"></Button>
      </div>
    </form>
  </div>
</template>

<script>
import TreeSelect from "primevue/treeselect";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { maxLength, helpers, required, sameAs } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import InlineMessage from "primevue/inlinemessage";
import { mapState } from "vuex";

export default {
  name: "PersonWorkInfo",
  data() {
    return {
      sessionId: sessionStorage.getItem("sessionId") || null,
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  mounted() {
    this.$store.dispatch("fetchSectors");
    this.$store.dispatch("fetchPersonSectorsInfo");
  },
  computed: {
    ...mapState(["errors", "success"]),
    sectors() {
      return this.$store.state.sectors;
    },
    formData() {
      return this.$store.state.formData;
    },
    isSessionIdNull() {
      return !this.sessionId;
    },
  },
  validations() {
    return {
      formData: {
        name: {
          required: helpers.withMessage(
            this.$t("form_errors.required"),
            required
          ),
          maxLength: helpers.withMessage(
            this.$t("form_errors.max_length", { max: 100 }),
            maxLength(100)
          ),
        },
        selectedSectors: {
          required: helpers.withMessage(
            this.$t("form_errors.required"),
            required
          ),
        },
        isTermsAccepted: {
          required: helpers.withMessage(
            this.$t("form_errors.required"),
            required
          ),
          sameAsTrue: helpers.withMessage(
            this.$t("form_errors.terms_must_be_accepted"),
            sameAs(true)
          ),
        },
      },
    };
  },
  components: { TreeSelect, InputText, InlineMessage, Button },
  methods: {
    async createSession() {
      this.$store.commit("setSuccess", false);
      await this.$store.dispatch("createSession");
      this.v$.$reset();
      this.sessionId = sessionStorage.getItem("sessionId");
    },
    async onSubmit() {
      this.v$.$touch();
      if (!this.v$.formData.$invalid) {
        this.$store.commit("setFormData", this.formData);
        return this.$store.dispatch("postPersonSectorsInfo");
      }
    },
  },
};
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #eeeeee;
  color: #1318c8;
  font-size: 1.5em;
  text-align: center;
  padding: 1em;
}

.card {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
}

form {
  max-width: 400px;
  width: 100%;
}

.form-group {
  margin-bottom: 2em;
}
.form-group-label {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-bottom: 0.2em;
}

.agreement {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.head-text {
  margin-bottom: 2em;
}

.radio {
  width: 10%;
}

.agreementText {
  margin: 0;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 1em;
  margin-right: 0.5em;
}

input {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

InlineMessage {
  height: 0.5em;
}
</style>

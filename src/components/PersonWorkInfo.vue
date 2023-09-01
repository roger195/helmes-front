<template>
  <div class="card">
    <form @submit.prevent="onSubmit">
      Please enter your name and pick the Sectors you are currently involved in.
      <br />

      <div class="flex flex-wrap gap-2">
        Name:
        <InputText type="text" size="small" v-model="formData.name" />
        <InlineMessage v-if="v$.formData.name.$error" severity="error"
          >{{ v$.formData.name.$errors[0].$message }}
        </InlineMessage>
      </div>

      <br />
      <br />
      Sectors:
      <TreeSelect
        v-model="formData.selectedSectors"
        placeholder="Select sectors"
        selectionMode="multiple"
        :options="sectors"
      >
      </TreeSelect>
      <InlineMessage v-if="v$.formData.selectedSectors.$error" severity="error"
        >{{ v$.formData.selectedSectors.$errors[0].$message }}
      </InlineMessage>
      <br />
      <br />
      <input type="checkbox" v-model="formData.isTermsAgreed" /> Agree to terms
      <InlineMessage v-if="v$.formData.isTermsAgreed.$error" severity="error"
        >{{ v$.formData.isTermsAgreed.$errors[0].$message }}
      </InlineMessage>
      <br />
      <br />
      <input type="submit" value="Save" />
    </form>
  </div>
  {{ formData.selectedSectors }}
</template>

<script>
import TreeSelect from "primevue/treeselect";
import InputText from "primevue/inputtext";
import { SECTORS } from "@/assets/constants";
import {
  maxLength,
  helpers,
  required,
  alpha,
  sameAs,
} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import InlineMessage from "primevue/inlinemessage";

export default {
  name: "PersonWorkInfo",
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => ({
    sectors: SECTORS,
    formData: {
      name: "",
      selectedSectors: [],
      isTermsAgreed: null,
    },
  }),
  validations() {
    return {
      formData: {
        name: {
          required: helpers.withMessage(
            this.$t("form_errors.required"),
            required
          ),
          alpha: helpers.withMessage(this.$t("form_errors.alpha"), alpha),
          maxLength: helpers.withMessage(
            this.$t("form_errors.max_length", { max: 5 }),
            maxLength(5)
          ),
        },
        selectedSectors: {
          required: helpers.withMessage(
            this.$t("form_errors.required"),
            required
          ),
        },
        isTermsAgreed: {
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
  components: { TreeSelect, InputText, InlineMessage },
  methods: {
    async onSubmit() {
      this.v$.$touch();
      if (!this.v$.formData.$invalid) {
        try {
          const response = await fetch("/api/person-work-info", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.formData),
          });

          if (response.ok) {
            // Handle success
          } else {
            // Handle error
          }
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      }
    },
  },
};
</script>

<style></style>

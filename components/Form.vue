<template>
  <section>
    <div class="columns">
      <div class="column">
        <b-field label="First name">
          <b-input type="text"
                   required useHtml5Validation="false"
                   validation-message="Обязательное поле, минимум 3 символа"
                   pattern="[А-Яа-яA-Za-z]{3,}"/>
        </b-field>
        <b-field>
          <b-checkbox>Display name <span class="has-text-grey is-block">The name you want other user to see</span></b-checkbox>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Last name">
          <b-input type="text"
                   required useHtml5Validation="false"
                   validation-message="Обязательное поле, минимум 3 символа"
                   pattern="[А-Яа-яA-Za-z]{3,}"/>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field
          class="mb-0"
          label="Timezone">
          <b-select required placeholder="Not specified" expanded>
            <option value="flint">First</option>
            <option value="silver">Second</option>
          </b-select>
        </b-field>
        <span class="custom-description has-text-grey mt-2 is-block">
                    Your current timezone. Used to send summary and notification emails, for times in your activity feeds, and for reminders
                  </span>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field
          label="Your team">
          <b-select required placeholder="Not specified" expanded>
            <option value="flint">First</option>
            <option value="silver">Second</option>
          </b-select>
        </b-field>
      </div>
    </div>
    <div class="columns mb-0">
      <div class="column mb-0">
        <b-field label="Bio">
          <b-input required maxlength="100" type="textarea"></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column pt-0">
        <b-field label="Phone number">
          <VuePhoneNumberInput
            v-model="phone"
            color="#7957d5"
          />
        </b-field>
      </div>
    </div>
  </section>
</template>

<script>
  import VuePhoneNumberInput from 'vue-phone-number-input';
  import 'vue-phone-number-input/dist/vue-phone-number-input.css';

  export default {
    name: "Form",
    components: {
      VuePhoneNumberInput
    },
    data() {
      return {
        phone: ""
      }
    },
  }
</script>

<style scoped>

</style>

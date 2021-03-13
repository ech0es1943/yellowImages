<template>
  <section>
    <div class="columns">
      <div class="column is-8">
        <h1>Profile info</h1>
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by1">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="columns">
              <figure class="image is-64x64">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
              </figure>
              <div class="column">
                <div>
                  <span>Change photo</span>
                  <span>Remove</span>
                </div>
                <p>Recommended to use JPEG, PNG or GIF, 1980x332px, max 3MB</p>
              </div>
            </div>
            <div class="divider"></div>
            <div class="columns">
              <div class="column">
                <b-field label="First name">
                  <b-input></b-input>
                </b-field>
                <b-field>
                  <b-checkbox>Display name <span>The name you want other user to see</span></b-checkbox>
                </b-field>
              </div>
              <div class="column">
                <b-field label="Last name">
                  <b-input></b-input>
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <b-field
                  label="Timezone">
                  <b-select placeholder="Not specified" expanded>
                    <option value="flint">Flint</option>
                    <option value="silver">Silver</option>
                  </b-select>
                  <span>
                    Your current timezone. Used to send summary and notification emails, for times in your activity feeds, and for reminders
                  </span>
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <b-field
                  label="Your team">
                  <b-select placeholder="Not specified" expanded>
                    <option value="flint">First</option>
                    <option value="silver">Second</option>
                  </b-select>
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <b-field label="Bio">
                  <b-input maxlength="100" type="textarea"></b-input>
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <b-field label="Phone number">
                  <VuePhoneNumberInput
                    v-model="phone"
                  />
                </b-field>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-8">
        <div class="card">
          <div class="card-header">
            <div class="card-header-title">
              Links
            </div>
          </div>
          <div class="card-content">
            <b-field label="Dribble">
              <b-input></b-input>
            </b-field>
            <b-field label="Behance">
              <b-input></b-input>
            </b-field>
            <b-field label="Pinterest">
              <b-input></b-input>
            </b-field>
            <b-field label="Facebook">
              <b-input></b-input>
            </b-field>
            <b-field>
              <b-checkbox>This is a company account</b-checkbox>
            </b-field>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import VuePhoneNumberInput from 'vue-phone-number-input';
  import 'vue-phone-number-input/dist/vue-phone-number-input.css';
  export default {
    name: 'Account',
    data() {
      return {
        phone: ""
      }
    },
    components: {VuePhoneNumberInput}
  }
</script>

<template>
  <div class="container page">
    <hr />

    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal" @click="reseteValues"></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal2u" v-if="showModal">
        <div class="container">
          <h1>Editar Usuario</h1>
          <form v-on:submit.prevent="submitForm()">
            <div class="form-group row">
              <label>Name</label>
              <input
                type="text"
                id="name"
                v-model="name"
                placeholder="Nombre"
                class="form-control"
              />
              <span
                v-if="!$v.name.fordWords && $v.name.$dirty"
                class="text-danger"
                >{{ nameError }}</span
              >
            </div>

            <div class="form-group row">
              <label>Age</label>
              <input
                type="number"
                v-model="age"
                placeholder="Age"
                class="form-control"
              />
              <span v-if="!$v.age.required && $v.age.$dirty" class="text-danger"
                >Age is required</span
              >
              <span v-if="!$v.age.between && $v.age.$dirty" class="text-danger"
                >Age must be between 18 to 45</span
              >
            </div>
            <div class="form-group row">
              <label>Email</label>
              <input
                type="email"
                v-model="email"
                placeholder="Email"
                class="form-control"
              />
              <span
                v-if="
                  (!$v.email.required || !$v.email.email) && $v.email.$dirty
                "
                class="text-danger"
                >Email is required</span
              >
            </div>

            <div class="form-group row">
              <label>Phone</label>
              <the-mask
                mask="+X (XXX) XX XX XX"
                value=""
                type="tel"
                placeholder="+_ (__) __ __ __"
                class="form-control"
                v-model="phone"
              ></the-mask>
              <span
                v-if="!$v.phone.required && $v.phone.$dirty"
                class="text-danger"
                >Phone is required!</span
              >
            </div>

            <div class="form-check">
              <input
                type="checkbox"
                v-model="relocation"
                class="form-check-input"
              />
              <label class="form-check-lable">Relocation</label>
            </div>
            <span
              v-if="!$v.age.ageBetween && $v.age.$dirty"
              class="text-danger"
              >{{ relocationError }}</span
            >

            <div class="form-group">
              <button type="submit" class="btn btn-primary button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </transition>
    <div class="d-flex flex-row-reverse">
      <div class="col-2">
        <button @click="deleteAllUsers" class="button">Delete all Users</button>
      </div>
      <div class="col-2">
        <button @click="showModal = true" class="button">New Users</button>
      </div>
    </div>

    <h1>Lista de usuarios</h1>
    <table class="table table-striped table-bordered table-hover table-dark">
      <thead>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Delete</th>
      </thead>
      <tr v-for="user in users" v-bind:item="user" v-bind:key="user.id">
        <th @click="(showModal = true), editUser(user)">{{ user.name }}</th>
        <th @click="(showModal = true), editUser(user)">{{ user.email }}</th>
        <th @click="(showModal = true), editUser(user)">{{ user.age }}</th>
        <th>
          <button @click="deleteUser(user)" class="button">X</button>
        </th>
      </tr>
    </table>
  </div>
</template>

<script>
import {
  required,
  minLength,
  between,
  alpha,
  email,
} from "vuelidate/lib/validators";
import {
  isNameJoe,
  notGmail,
  isEmailAvailable,
  fordWords,
  ageBetween,
} from "./validator";
import { TheMask } from "vue-the-mask";
import { log } from 'util';

export default {
  name: "Page",
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          age: 26,
          email: "Sincere@april.biz",
          phone: "7548001909",
          relocation: false,
        },
        {
          id: 2,
          name: "Ervin Howell",
          age: 37,
          email: "Sincere@april.biz",
          phone: "3175674187",
          relocation: true,
        },
        {
          id: 3,
          name: "Clementine Bauch",
          age: 31,
          email: "Sincere@april.biz",
          phone: "4845365978",
          relocation: true,
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          age: 44,
          email: "Sincere@april.biz",
          phone: "8564223723",
          relocation: true,
        },
        {
          id: 5,
          name: "Chelsey Dietrich",
          age: 19,
          email: "Lucio_Hettinger@annie.ca",
          phone: "4096415487",
          relocation: true,
        },
        {
          id: 6,
          name: "Mrs. Dennis Schulist",
          age: 18,
          email: "Karley_Dach@jasper.info",
          phone: "9494961755",
          relocation: true,
        },
        {
          id: 7,
          name: "Kurtis Weissnat",
          age: 45,
          email: "Telly.Hoeger@billy.biz",
          phone: "5405535065",
          relocation: true,
        },
      ],
      idCount: 10,
      newUser: {
        name: "",
        age: "",
        email: "",
        phone: "",
        relocation: true,
      },
      showModal: false,
      id: "",
      name: "",
      age: "",
      email: "",
      phone: "",
      relocation: true,
      //Var to display errors
      nameError: "",
      relocationError: "",
      //phone mask
      X: { pattern: /[0-9a-zA-Z]/ },
    };
  },
  validations: {
    name: {
      fordWords,
    },
    email: {
      required,
      email,
    },
    age: {
      required,
      between: between(18, 45),
      ageBetween,
    },
    phone: {
      required,
    },
    relocation: {
      required,
    },
  },
  components: { TheMask },
  methods: {
    addUser() {
      this.users.push(this.newUser);
      this.newUser = [];
    },
    deleteUser(user) {
      this.users.splice(this.users.indexOf(user), 1);
    },
    deleteAllUsers() {
      this.users = [];
    },
    editUser(user) {
      this.$v.$reset();
      this.id = user.id;
      this.name = user.name;
      this.age = user.age;
      this.email = user.email;
      this.phone = user.phone;
      this.relocation = user.relocation;
    },
    submitForm() {
      this.$v.$touch();
      

      if (!this.$v.$invalid) {
        if (this.id != "") {
          this.newUser = {
            id: this.idCount,
            name: this.name,
            age: this.age,
            email: this.email,
            phone: this.phone,
            relocation: this.relocation,
          };
          let temp = this.users.find(obj => obj.id = this.newUser.id)
          this.users[this.users.indexOf(temp)] = this.newUser
          console.log("editado")
          
        } else {
          this.idCount++;
          this.newUser = {
            id: this.idCount,
            name: this.name,
            age: this.age,
            email: this.email,
            phone: this.phone,
            relocation: this.relocation,
          };
          this.users.push(this.newUser);
        }
      } else {
        console.log("invalida");
      }
    },
    reseteValues() {
      this.showModal = false;
      this.$v.$reset();
      this.name = "";
      this.age = "";
      this.email = "";
      this.phone = "";
      this.relocation = "";
    },
  },
  created() {},
};
</script>

<style scoped>
.button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  display: inline-block;
  font-size: 1em;
  padding: 10px 25px;
  background-image: linear-gradient(to right, #cc2e5d, #ff5858);
  border-radius: 8px;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}

button:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal2u {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 16px;

  padding: 25px;
}

.modal2u h1 {
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
}

.modal2u label {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
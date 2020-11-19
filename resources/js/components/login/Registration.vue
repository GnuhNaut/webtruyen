<template>
    <div class="container">
        <div class="welcome__component">
            <h2 class="pt-3 mt-3">Đăng ký</h2>
        </div>
        <div class="form__component">
            <div class="input__box box__space">
                <label class="input__label">User name</label>
                <input class="input__model" type="text"/>
            </div>
            <div class="input__box box__space">
                <label class="input__label">
                    Password
                </label>
                <input class="input__model" :type="passwordFieldType" v-model="password"/>
                <button class="btn-inhenrt input__icon" @click="switchVisibility" v-if="isEye">
                  <i class="fas fa-eye" @click="isEye = !isEye"></i>
                </button>
                <button  class="btn-inhenrt input__icon" @click="switchVisibility" v-else>
                  <i class="fas fa-eye-slash" @click="isEye = !isEye"></i>
                </button>
            </div>
            <div class="input__box box__space">
                <label class="input__label">
                    Confirm Password
                </label>
                <input class="input__model" :type="confirmPasswordFieldType" v-model="confirmPassword"/>
                <button class="btn-inhenrt input__icon" @click="confirmPasswordSwitchVisibility" v-if="isEyeConfirmPassword">
                  <i class="fas fa-eye" @click="isEyeConfirmPassword = !isEyeConfirmPassword"></i>
                </button>
                <button  class="btn-inhenrt input__icon" @click="confirmPasswordSwitchVisibility" v-else>
                  <i class="fas fa-eye-slash" @click="isEyeConfirmPassword = !isEyeConfirmPassword"></i>
                </button>
            </div>
            <div class="main__action mt-3">
                <button class="login__btn "><a class="btn-register" href="/register">Đăng ký</a></button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "registration",
    data() {
        return {
          password: '',
          passwordFieldType: 'password',
          isEye: false,
          confirmPassword: '',
          confirmPasswordFieldType: 'password',
          isEyeConfirmPassword: false,
        }
    },
    methods: {
      switchVisibility() {
        this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
      },
      confirmPasswordSwitchVisibility() {
        this.confirmPasswordFieldType = this.confirmPasswordFieldType === 'password' ? 'text' : 'password'
      }
    }
}
</script>


<style>
    body{
    background: #e3e3e3;
    display: flex;
    justify-content: center;
    align-items:center;
    height:100vh;
    }
    #app {
      background-color: inherit;
      font-size: 18px;
    }
    .container{
      background-color:white;
      border-radius: 1rem;
      width:600px;
      height: 560px;
      overflow: hidden;
    }
    .center__box{
      position: absolute;
      top: 40%;
      left: 0.5rem;
      transform: translateY(-50%);
      z-index: 2;
      color: white;
    }
    .center__box span,.center__box h1{
      padding:0;
      margin:0
    }
    .form__component{
      display: flex;
      justify-content: center;
      align-items: stretch;
      flex-direction: column;
      padding:1rem;
    }
    .box__space{
      margin-bottom: 1rem;
    }
    .input__box{
      border:1px solid rgb(209, 208, 208);
      position: relative;
      margin: 2rem;
      border-radius:0.5rem;
      padding:0.25rem;
    }
    .input__label{
      position: absolute;
      top:0;
      transform: translateY(-50%);
      left: 1rem;
      font-size: 1rem;
      font-weight: 600;
      background-color: white;
      padding:0.25rem;
      text-transform: uppercase;
    }
    .input__model{
      width: 80%;
      border: none;
      outline: none;
      height: 40px;
      padding: 0 1rem;
      font-weight: bold;
    }
    .input__icon{
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      color:rgb(209, 208, 208);
    }
    .sub__action{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .main__action{
      display:flex;
      justify-content: center;
      align-items: center;
    }
    .login__btn{
    background: linear-gradient(to right, #59ea72, #16ad52);
    box-shadow: 0px 11px 34px -10px #46a952;
     padding:1rem;
     width:75%;
     border:none;
     outline:none;
     border-radius: 100px;
     color:white;
     font-weight: bold;
     display:flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;
    }
    .sub__action__link{
      color:black;
      text-decoration: initial;
    }
    i{
        font-family: 'FontAwesome';
        font-size: 18px;
    }
    .input__icon{
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      color:#717171;
    }
    .btn-inhenrt {
      background: inherit;
      border: none;
    }
    button:focus {
      outline: none;
    }
    .btn-register {
      color: inherit;
      text-decoration: none;
    }
    a:hover {
      color: inherit !important;
      text-decoration: none !important;
    }
</style>
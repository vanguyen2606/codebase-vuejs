<template>
  <el-main :class="$style.formWrapper">
    <div :class="$style.logoWrapper">
      <el-image :src="Logo" />
    </div>

    <div :class="$style.title">Đăng nhập</div>

    <el-form label-width="120px" label-position="left">
      <el-form-item label="Tên đăng nhập">
        <el-input
          v-model.trim="username"
          :class="{ 'has-error': v$.username.$error }"
          @blur="v$.username.$touch"
        />
        <div v-if="v$.username.$error" class="el-form-item__error">
          {{ v$.username.$errors[0].$message }}
        </div>
      </el-form-item>
      <el-form-item label="Mật khẩu">
        <el-input
          v-model.trim="password"
          type="password"
          :class="{ 'has-error': v$.password.$error }"
          @blur="v$.password.$touch"
        />
        <div v-if="v$.password.$error" class="el-form-item__error">
          {{ v$.password.$errors[0].$message }}
        </div>
      </el-form-item>
      <el-form-item :class="$style.actionButton">
        <el-button @click="onSubmit">Đăng nhập</el-button>
      </el-form-item>
    </el-form>

    <el-divider>Hoặc</el-divider>

    <div :class="$style.otherLogin">
      <div :class="$style.btnSocial">
        <el-image :src="FbIcon" :class="$style.icon" />
      </div>
      <div :class="$style.btnSocial">
        <el-image :src="GmailIcon" :class="$style.icon" />
      </div>
    </div>
  </el-main>
</template>

<script setup>
import { ref } from 'vue'
import Logo from '@assets/logo.png'
import FbIcon from '@assets/fb-icon.png'
import GmailIcon from '@assets/gmail-icon.png'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const username = ref('')
const password = ref('')

const rules = {
  username: {
    required,
  },
  password: {
    required,
  },
}
const v$ = useVuelidate(rules, {
  username,
  password,
})

const onSubmit = async () => {
  const result = await v$.value.$validate()
  if (!result) return
  // handle login
}
</script>

<style lang="scss" module>
.formWrapper {
  width: 380px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #cdd0d6;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;

  :global {
    .el-input {
      &__wrapper {
        transition: 0.3s;
        box-shadow: none;
        border: 1px solid #cdd0d6;
        &:hover,
        &.is-focus {
          border-color: #41d092;
        }
      }
      &.has-error {
        .el-input__wrapper {
          border-color: red;
        }
      }
    }
  }

  .logoWrapper {
    margin-bottom: 16px;
    text-align: center;
  }

  .title {
    text-align: center;
    margin-bottom: 12px;
  }

  .actionButton {
    margin: 0;
    margin-top: 24px;

    :global(.el-button) {
      background-color: #41d092;
      border: none;
      color: #ffffff;
    }
  }

  .otherLogin {
    display: flex;
    justify-content: center;
    
    .btnSocial {
      border: 1px solid #cdd0d6;
      border-radius: 50%;
      padding: 8px;
      cursor: pointer;
      & + .btnSocial {
        margin-left: 12px;
      }
      .icon {
        display: block;
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>

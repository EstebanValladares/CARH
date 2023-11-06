<script setup>
    import { useForm, useField } from 'vee-validate'
    import { loginUser as validationSchema } from '../validation/loginUser'
    import { useAuthStore } from '../stores/auth'

    const auth = useAuthStore()
    const { handleSubmit } = useForm( { validationSchema })

    const email = useField('email')
    const password = useField('password')
    const submit = handleSubmit((values) =>{
        auth.login(values)
    })

</script>

<template>
    <v-card flat max-with="600" >
        <v-card-title>
            <h1>Iniciar sesion</h1>
        </v-card-title>

        <v-alert
            v-if="auth.hasError"
            class="my-5"
            type="error"
            :title="auth.errorMsg"
            
        ></v-alert>

        <v-form class="mt-5">
            <v-text-field type="email" label="Gmail" class="mb-5" v-model="email.value.value" :error-messages="email.errorMessage.value" />
            <v-text-field type="password" label="Password" class="mb-5" v-model="password.value.value" :error-messages="password.errorMessage.value" />
        </v-form>
        <v-btn color="green-darken-3" @click="submit" >Iniciar sesion</v-btn>
    </v-card>
</template>

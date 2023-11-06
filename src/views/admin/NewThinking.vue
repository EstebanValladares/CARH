<script>

</script>

<template>
    <v-card max-width="700" flat="mx-auto" class=" mx-auto my-10">
        <v-card-title class="text-h4">
            Nueva seccion
        </v-card-title>
        <v-card-subtitle class="text-5">
            Creacion de nueva seccion llenando el formulario
        </v-card-subtitle>
        <v-form class="mt-10">
            <v-text-field class="mb-5" label="Titulo seccion"></v-text-field>
            <v-file-input accept="image/jpeg" label="Imagen" prepend-icon="mdi-camera" class="mb-5"></v-file-input>
            <v-text-field class="mb-5" label="ubicacion"></v-text-field>
            <v-textarea class="mb-5" label="Descripcion"></v-textarea>
            <v-btn>Agregar seccion</v-btn>
        </v-form>
    </v-card>
</template>

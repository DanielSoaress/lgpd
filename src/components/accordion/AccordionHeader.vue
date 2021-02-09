<template>
    <div class="w-100" >
        <div class="accordion-header text-left w-100 py-2 " >
            <b-row>
                <b-col cols="3">NOME</b-col>
                <b-col cols="3">PROTOCOLO</b-col>
                <b-col cols="3">DATA</b-col>
                <b-col cols="2">ESTADO</b-col>
                <b-col cols="1"></b-col>
            </b-row>           
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
.accordion-header {
    background-color: #0D0D0D;
    padding-left: 15px;
} 

.dropdown-toggle {
  border-style: solid;
  border-color: #2e2d2d!important;
  border-width: 5px;
  background-color: #0D0D0D!important;
  color: #ffffff!important;
  font-weight: 700;
}

.dropdown-toggle:hover {
  background-color: #2e2d2d!important;
}

</style>
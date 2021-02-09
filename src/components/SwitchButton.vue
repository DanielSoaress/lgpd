<template>
    <label class="switch">
        <input type="checkbox">
        <span class="slider round center">
            <img class="check" src="../assets/icons/check.png" alt="" height="15" weight="15">
            <img class="close" src="../assets/icons/close.png" alt="" height="13" weight="13">
        </span>
    </label>
</template>

<script>
export default {

}
</script>

<style>
 /* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.center {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-around;
}

.close {
    margin-right: 3px;
}

.check {
    margin-top: 5px;
    margin-left: 2px;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #D92B4B;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #19A614;
}

input:focus + .slider {
  box-shadow: 0 0 1px #19A614;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 10px;
}

.slider.round:before {
  border-radius: 25%;
} 

</style>
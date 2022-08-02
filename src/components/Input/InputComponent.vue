<template>
  <div>
    <label for="">{{ label }}</label>
    <br />
    <input :type="type" :placeholder="placeHolder" />
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    label: { type: String, require },
    placeHolder: { type: String, default: "Preencha os dados" },
    type: { type: String, default: "text" },
  },
  data() {
    return {};
  },
};
</script>

<style>
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0px;
  display: inline-block;
  border: 1px solid #ddd;
  outline: none;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
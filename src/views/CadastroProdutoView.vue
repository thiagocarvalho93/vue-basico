<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2 class="titulo">Add product</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-2">
        <div class="form-group">
          <label for="id">Code</label>
          <input id="id" type="text" class="form-control" disabled />
        </div>
      </div>

      <div class="col-sm-10">
        <div class="form-group">
          <label for="nome">Name</label>
          <input id="nome" type="text" class="form-control" />
        </div>
      </div>

      <div class="col-sm-4">
        <div class="form-group">
          <label for="price">Price</label>
          <input id="price" type="text" class="form-control" />
        </div>
      </div>

      <div class="col-sm-4">
        <div class="form-group">
          <label for="amount">Amount</label>
          <input id="amount" type="text" class="form-control" />
        </div>
      </div>

      <div class="col-sm-4">
        <div class="form-group">
          <label for="date">Register date</label>
          <input id="date" type="date" class="form-control" />
        </div>
      </div>

      <div class="col-sm-12">
        <div class="form-group">
          <label for="obs">Obs</label>
          <textarea id="obs" class="form-control" rows="4" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
textarea {
  resize: none;
}
</style>
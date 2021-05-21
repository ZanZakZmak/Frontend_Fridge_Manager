<template>
  <div class="shopping list">
    <h1>My Shopping Lists</h1>

    <div class="container">
    <div class="row">
      <div class="col-5">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some example text. Some example text.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
      <div class="col-7">
        <div class="card">
          <div class="card-header">Naziv shopping liste</div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li>An item</li>
              <li>A second item</li>
              <li>A third item</li>
            </ul>
          </div>
          <div class="card-footer" text-muted>2 days ago</div>
        </div>
        <br />
        <div class="card">
          <div class="card-header">Naziv shopping liste</div>
          <div class="card-body">Content</div>
          <div class="card-footer" text-muted>5 days ago</div>
        </div>
        <br />
        <div class="card">
          <div class="card-header">Naziv shopping liste</div>
          <div class="card-body">Content</div>
          <div class="card-footer" text-muted>7 days ago</div>
        </div>
      </div>
      <div class="col-1">
      </div>
    </div>
  </div>
  </div>
</template>

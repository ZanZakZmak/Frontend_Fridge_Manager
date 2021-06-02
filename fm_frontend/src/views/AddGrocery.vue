<template>
  <div class="addgrocery">
    <h1>Add Groceries</h1>
          <div class="card">
            <div class="card-body">
                <div class="container">
                <div class="row">
                <div class="col-4">
                    <img class="card-img-top rounded-circle" src="https://images.unsplash.com/photo-1603048297172-c92544798d5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" align="left" />
                </div>
                <div class="col-6">
              <p align="left">
                Naziv: <input type="text" placeholder="Naziv namirnice" />
              </p>
              <p align="left">
                Cijena: <input type="text" placeholder="Cijena u kunama" />
              </p>
              <p align="left">
                Kategorija:
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Odaberi</button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item">Povrće</a></li>
                    <li><a class="dropdown-item">Voće</a></li>
                    <li><a class="dropdown-item">Mliječni proizvodi</a></li>
                    <li><a class="dropdown-item">Meso</a></li>
                    <li><a class="dropdown-item">Riba</a></li>
                    <li><a class="dropdown-item">Piće</a></li>
                </ul>
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="button" class="btn btn-primary"> Add Grocery </button>
              </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

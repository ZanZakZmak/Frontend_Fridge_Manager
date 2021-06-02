<template>
  <div class="profile edit">
    <h1>Edit profile</h1>

    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <p class="bg-primary text-white">Buđžet : 500</p>
              <p class="bg-primary text-white">Potrošen buđžet : 245</p>
              <button class="btn btn-primary">Edit</button>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="card">
            <div class="card-body">
              <div class="container">
                <div class="row">
                  
                    <div class="col-10">
                      <form>
                      <label for="exampleInputUsername" class="form-label"
                        >Username
                      </label>
                      <input
                        v-model="username"
                        type="username"
                        class="form-control"
                        id="usernameField"
                        aria-describedby="usernameHelp"
                        placeholder="Enter new username"
                      />
                      <label for="exampleInputEmail1" class="form-label"
                        >Email address
                      </label>
                      <input
                        v-model="email"
                        type="email"
                        class="form-control"
                        id="emailField"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                      <label for="exampleInputPassword1" class="form-label"
                        >Password
                      </label>
                      <input
                        v-model="password"
                        type="password"
                        class="form-control"
                        id="passwordField"
                        placeholder="Password"
                      />
                      </form>
                    </div>
                  
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button class="btn btn-primary">Edit</button>
                    </div>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
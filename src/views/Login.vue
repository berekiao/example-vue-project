<template>
    <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">GESTION YTS</h1>
                                    </div>
                                    <form class="user">
                                        <div class="form-group">
                                            <input type="text" v-model="form.usernameOrEmail"
                                                class="form-control form-control-user" id="exampleInputPassword"
                                                placeholder="Email or Username">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" v-model="form.password"
                                                class="form-control form-control-user" id="exampleInputPassword"
                                                placeholder="Password">
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <button @click.prevent="connexion" class="btn btn-primary btn-user btn-block">
                                            Login
                                        </button>
                                        <hr>
                                        <a href="index.html" class="btn btn-danger btn-user btn-block">
                                            <i class="fab fa-google fa-fw"></i> Login with Google
                                        </a>
                                        <a href="index.html" class="btn btn-primary btn-user btn-block">
                                            <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                        </a>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <a class="small" href="register.html">Create an Account!</a>
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

<script>
import { ElMessage, ElNotification } from "element-plus";

export default {
    data() {
        return {
            form: {
                usernameOrEmail: "",
                password: "",
            },
        };
    },
    methods: {
        async connexion() {
            try {
                const response = await this.$store.dispatch("user/login", this.form);
                const result = response;

                if (result) {
                    localStorage.setItem("userConnected", JSON.stringify(result));
                    this.$router.push("/dashboard");
                    ElMessage({
                        message:
                            "Connexion réussie.",
                        type: "success",
                    });
                }
            } catch (error) {
                ElMessage({
                    message: "Connexion echouée. Veuillez verifier vos identifiants",
                    type: "error",
                });
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>
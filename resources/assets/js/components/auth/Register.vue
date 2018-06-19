<template>
		<form class="login100-form validate-form">
	        <div class="wrap-input100 validate-input m-b-26" data-validate="Nombre">
	            <span class="label-input100"><i class="fa fa-lg fa-user"></i></span>
	            <input class="input100" type="text" name="username" placeholder="Usuario" autofocus>
	            <span class="focus-input100"></span>
	        </div>

	        <div class="wrap-input100 validate-input m-b-18" data-validate = "E-mail">
	            <span class="label-input100"><i class="fa fa-lg fa-unlock-alt"></i></span>
	            <input class="input100" type="email" placeholder="E-mail">
	            <span class="focus-input100"></span>
	        </div>

	        <div class="wrap-input100 validate-input m-b-18" data-validate = "Contraseña">
	            <span class="label-input100"><i class="fa fa-lg fa-unlock-alt"></i></span>
	            <input class="input100" type="password" placeholder="*****">
	            <span class="focus-input100"></span>
	        </div>

	        <div class="wrap-input100 validate-input m-b-18" data-validate = "Repita contraseña">
	            <span class="label-input100"><i class="fa fa-lg fa-unlock-alt"></i></span>
	            <input class="input100" type="password" placeholder="*****">
	            <span class="focus-input100"></span>
	        </div>

	        <div class="flex-sb-m w-full p-b-30">
	            <div class="contact100-form-checkbox">
	                <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
	                <label class="label-checkbox100" for="ckb1">
	                    Recordarme usuario
	                </label>
	            </div>

	            <div>
	                <a href="#" class="txt1">
	                    Registrarse
	                </a>
	            </div>
	        </div>

	        <div class="container-login100-form-btn">
	            <button class="login100-form-btn">
	                <i class="fa fa-sign-in-alt"></i> Ingresar
	            </button>
	        </div>
	    </form>
</template>

<script>
	export default {
		name: 'Register'
	}
</script>
$(document).ready(function(){
		//SELECT-MUESTRA TODOS LOS USUARIOS DE LA TABLA
		$.getJSON("http://127.0.0.1/M-master/api/users", function(result){
			for(i = 0; i < result.length; i++){
				$('#tabla').append("<tr><td>"+result[i].id_usuario+"</td><td>"+result[i].poblacion+"</td><td>"+result[i].rol+"</td><td>"+result[i].nombre+"</td><td>"+result[i].password+"</td><td>"+result[i].email+"</td></tr>");
			}
		});
	//}

	//INSERT-INSERTA NUEVO USUARIO DE LOS FORMS DE LA APLICACION
	$('.form-user').on('submit',function(){
		//$("#insert").on('click',function(){
			var postData = $(this).serialize();
			     $.ajax({
			       url:"http://127.0.0.1/M-master/api/users",
			       data:postData,
			       method:'post',
			       dataType:'json',
			       success:function(){
			          location.reload(); 
			       }
			});
		//});
	});
});
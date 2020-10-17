var buttonAction = document.querySelector('#button-action');
buttonAction.addEventListener('click', function(){ app.cargarFoto(Camera.PictureSourceType.CAMERA)});
var buttonGallery = document.querySelector('#button-gallery');
buttonGallery.addEventListener('click', function(){ app.cargarFoto(Camera.PictureSourceType.PHOTOLIBRARY)});

var app = {
    cargarFoto: function(pictureSourceType){
        var options = {
            sourceType: pictureSourceType,
            destinationType: Camera.DestinationType.FILE_URI,
            targetWidth: 300,
            targetHeight: 300,
            quality:100,
            correctOrientation: true,
            saveToPhotoAlbum: true,
            cameraDirection: 1,
        };
        navigator.camera.getPicture(app.fotoCargada, app.errorAlTomarFoto,options)
    },

    fotoCargada: function(imageURI){
        var img = document.createElement('img');
        img.onload = function(){
            app.pintarFoto(img)
        }
        img.src=imageURI
    },

    errorAlTomarFoto: function(message){
        console.log('Fallo al tomar la foto o toma cancelada: '+message);
    }
}

//prueba video

document.addEventListener("deviceready", onDeviceReady, true);
        
var videoCapture = '' ;

function onDeviceReady() {
    videoCapture = navigator.device.capture;
    
    $('#record').bind('touchstart', function() {
        getVideo(); 
    });
}

function getVideo() {
    videoCapture.captureVideo(onSuccess, onError, {limit: 2});
}

function onSuccess(videoObject) {
    var i, output = '';
    for (i = 0; i < videoObject.length; i += 1) {
        output += 
            '<br />' +
            '<br />========' +
            '<br />' +
            'Name: ' + videoObject[i].name + '<br />' + 
            'Full Path: ' + videoObject[i].fullPath + '<br />' +
            'Type: ' + videoObject[i].type + '<br />' +
            'Created: ' + new Date(videoObject[i].lastModifiedDate) + '<br />' +
            'Size: ' + videoObject[i].size + '<br />========';
    }
    $('#record').before(output);
}

function onError(error) {
    var errReason;
    switch(error.code) {
        case 0:
            errReason = 'La camara fallo capturando el video.';
        break;
        case 1:
            errReason = 'La aplicación de captura de video está actualmente ocupada con otra solicitud.';
        break;
        case 2:
            errReason = 'Se envió un parámetro no válido a la API.';
        break;
        case 3:
            errReason = 'Salió de la aplicación de captura de video sin grabar nada.';
        break;
        case 4:
            errReason = 'Su dispositivo no admite la solicitud de captura de video.';
        break;
    }
    alert('El siguiente error ha ocurrido: ' + errReason);
}
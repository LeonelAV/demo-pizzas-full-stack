function ContactController($scope, $location, ApiService, SweetAlert) {

  $scope.sendMessage = function( event ) {
    event.preventDefault()
    console.log('sendMessage')
    const { name, email, subject, message } = $scope
    const dataMessage = { name, email, subject, message }

    ApiService.sendMessage( dataMessage )
      .then( msg => {
        SweetAlert.swal("Success!", msg, "success");
      } )

  }

}

module.exports = ContactController
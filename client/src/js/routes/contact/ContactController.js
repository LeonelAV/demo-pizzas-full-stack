function ContactController($scope, $location, ApiService) {

  $scope.sendMessage = function( event ) {
    event.preventDefault()
    console.log('sendMessage')
    const { name, email, subject, message } = $scope
    const dataMessage = { name, email, subject, message }

    ApiService.sendMessage( dataMessage )
      .then( console.log )

  }

}

module.exports = ContactController
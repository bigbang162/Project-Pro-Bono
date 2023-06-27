Public Class Form1
 Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
 
    'Declare Variables
    Dim strName As String
    Dim strEmail As String
    Dim strPhone As String
    Dim strAddress As String
    Dim strCity As String
    Dim strProvince As String
    Dim strCountry As String
    Dim strZipcode As String
    Dim strMessage As String
    Dim strConfirmation As String
    Dim blnGetInfo As Boolean
 
    'Get Input from User
    strName = InputBox("Please enter your name:", "Name")
    strEmail = InputBox("Please enter your email address:", "Email")
    strPhone = InputBox("Please enter your phone number:", "Phone")
 
    'Check if user is ready to proceed
    blnGetInfo = MsgBox("Are you ready to complete your project pro bono registration?", vbYesNo)
 
    If blnGetInfo = vbYes Then
        'Get User Address Information
        strAddress = InputBox("Please enter your street address:", "Address")
        strCity = InputBox("Please enter your city:", "City")
        strProvince = InputBox("Please enter your province:", "Province")
        strCountry = InputBox("Please enter your country:", "Country")
        strZipcode = InputBox("Please enter your zip code:", "Zipcode")
 
        'Display Confirmation Message
        strMessage = "Hello " &amp; strName &amp; ", thank you for registering for the project pro bono. Are you sure you wish to proceed? Below is your contact information: 
        Name: " &amp; strName &amp; " 
        Email: " &amp; strEmail &amp; " 
        Phone Number: " &amp; strPhone &amp; " 
        Address: " &amp; strAddress &amp; " 
        City: " &amp; strCity &amp; " 
        Province: " &amp; strProvince &amp; " 
        Country: " &amp; strCountry &amp; " 
        Zip Code: " &amp; strZipcode &amp; " 
        "
        strConfirmation = MsgBox(strMessage, vbYesNo)
 
    End If
 
    If strConfirmation = vbYes Then
        'Display Confirmation Message
        MsgBox("You have successfully completed your project pro bono registration!", vbInformation)
 
    Else
        'Display Error Message
        MsgBox("You have cancelled the registration. Please try again later.", vbExclamation)
 
    End If
 
 End Sub
End Class
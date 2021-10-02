:: запустить файл keystore_create.bat потом signerApp.bat

:: "c:\Program Files\Java\jre1.8.0_221\bin\"
set folder_JRE=C:\Program Files\Java\jre1.8.0_261\bin

:: key_name - название приложения, можно сокращенно
set key_name=tropicaladventure

:: alias_name - тоже самое название только с приставкой в конце _alias
set alias_name=tropicaladventure_alias

:: key_password - dhkelfh
set key_password=dhkelfh

:: folder_keys - папку куда сохранить ключ
set folder_keys=C:\Users\dev\Documents\cordova\mobile_app_v17\for_release

cd %folder_JRE%
keytool -genkey -v -keystore %folder_keys%\%key_name%.keystore -alias %alias_name% -keyalg RSA -keysize 2048 -validity 10000 -storepass %key_password% -keypass %key_password% -dname "CN=, OU=, O=, L=, S=, C="
pause
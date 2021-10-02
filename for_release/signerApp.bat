@echo off

:: C:\Program Files\Java\jdk1.8.0_261\bin
set folder_JDK=C:\Program Files\Java\jdk1.8.0_261\bin

:: key_path - папка где лежит ключ
set key_path=C:\Users\dev\Documents\cordova\mobile_app_v17\for_release\tropicaladventure.keystore

:: key_alias == alias_name
set key_alias=tropicaladventure_alias

:: key_password - dhkelfh 
set key_password=dhkelfh

:: full_path_apk_name C:\Users\dev\Documents\apps\навание приложения.apk
set full_path_apk_name=C:\Users\dev\Documents\cordova\mobile_app_v17\for_release\tropicaladventure.apk

:: project_path - путь до проекта кордовы
set project_path=C:\Users\dev\Documents\cordova\mobile_app_v17

:: zipalign="c:\Sdk\build-tools\28.0.3\" 
set zipalign_path=C:\Users\dev\AppData\Local\Android\Sdk\build-tools\30.0.2

cd %folder_JDK%
echo %key_password%|jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore %key_path% %project_path%\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk %key_alias%

cd %zipalign_path%
zipalign -v 4 %project_path%\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk %full_path_apk_name%
pause
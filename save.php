<?php
	$file = $_FILES["filedata"];
    move_uploaded_file($file["tmp_name"], $file["name"])
?>
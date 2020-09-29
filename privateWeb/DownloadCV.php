<?php
    $path = getcwd();
    $path .= "/downloadable/ShuyuYuan_resume_au.pdf";
    if ($fd = fopen($path, 'r')){
        $fsize = filesize($path);
        $path_parts = pathinfo($path);
        $ext = strtolower($path_parts["extension"]);
        header("Content-type: application/pdf");
        header("Content-Disposition: filename=\"".$path_parts["basename"]."\"");
        header("Content-length: $fsize");
        header("Cache-control: private");
        while(!feof($fd)){
            $buffer = fread($fd , 2048);
            echo $buffer;
        }
    }
    fclose($fd);
    exit;

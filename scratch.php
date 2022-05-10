<head></head>
<body>
Hello, today is <?php echo date('l, F jS, Y'); ?>.
</body>

<html>
<head></head>
<body>
<ul>
<?php for($i=1;$i<=5;$i++){ ?>
<li>Menu Item <?php echo $i; ?></li>
<?php } ?>
</ul>
</body>
</html>
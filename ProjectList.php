<?php
/**
 * Created by JetBrains PhpStorm.
 * User: apple
 * Date: 13-4-12
 * Time: 上午12:43
 * To change this template use File | Settings | File Templates.
 */

include "QueryDAO.php";



$bizService = new BizService();

$result = $bizService->getProjectListByUserID(1);

while($row = mysql_fetch_array($result))
{
   echo '<input type="checkbox" value="ProjectID" />'.$row["ProjectName"].'<br/>';
}

?>
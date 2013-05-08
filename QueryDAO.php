<?php

class BizService
{

    /*
     * 根据用户ID取项目列表
     */
    function getProjectListByUserID($UserID)
    {

        $Sql = "SELECT * FROM ProjectInfo WHERE CreateUserID=".$UserID;
        return $this->RunQuerySql($Sql);
    }

    /*
     * 根据用户ID取任务列表
     */
    function getTaskListByUserID($UserID)
    {
        $Sql = "SELECT * FROM ProjectTask WHERE User=".$UserID;
        return $this->RunQuerySql($Sql);
    }

    /*
     * 根据项目ID取任务列表
     */
    function getTaskListByProjectID($ProjectID)
    {
        $Sql = "SELECT * FROM ProjectTask WHERE ProjectID=".$ProjectID;
        return $this->RunQuerySql($Sql);
    }

    /*
     * 根据项目ID取项目明细
     */
    function getProjectInfoByProjectID($ProjectID)
    {
        $Sql = "SELECT * FROM ProjectTask WHERE ProjectID=".$ProjectID;
        return $this->RunQuerySql($Sql);
    }

    /*
     * 根据项目ID取项目成员列表
     */
    function getUserListByProjectID($ProjectID)
    {
        $Sql = "SELECT * FROM ProjectUser WHERE ProjectID=".$ProjectID;
        return $this->RunQuerySql($Sql);
    }

    /*
     * 根据任务ID取任务明细
     */
    function getTaskInfoByTaskID($TaskID)
    {
        $Sql = "SELECT * FROM Tasks WHERE TaskID=".$TaskID;
        return $this->RunQuerySql($Sql);
    }

    function createProject($UserID,$ProjectName,$ProjectRight)
    {

    }

    function addProjectInfo($ProjectID,$UserID)
    {

    }


    function RunQuerySql($sql)
    {
        // 取数据库信息
        $db_info = new DBInfo();

        // 建立连接
        $con = mysql_connect($db_info->server_ip,$db_info->server_username,$db_info->server_password);
        if (!$con)
        {
            die('Could not connect:' . mysql_error());
        }

        // 选择数据库
        mysql_select_db($db_info->server_database, $con);

        // 执行SQL语句,并把结果集放入属性
        $result = mysql_query($sql,$con);

        // 关闭连接
        mysql_close($con);

        return $result;
    }

}
class DBInfo
{
    private $server_ip;
    private $server_username;
    private $server_password;
    private $server_database;

    private function __get($property_name){
        if(isset($this->$property_name)){
            return($this->$property_name);}
        else{
            return(NULL);
        }
    }

    function __construct()
    {
        $this->server_ip = "127.0.0.1";
        $this->server_username = "root";
        $this->server_password = "";
        $this->server_database = "andwork";
    }

}
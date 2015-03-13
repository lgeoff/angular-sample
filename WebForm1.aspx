﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="Bootstrap_ui.WebForm1" %>
 
<!DOCTYPE html>

<html>
<head runat="server">
    <title></title>
    <link href="bower_components/angular-ui/build/angular-ui.css" rel="stylesheet" />
    <link href="bower_components/bootstrap/dist/css/bootstrap.css" rel="stylesheet" />
    <link href="resources/custom/custom.css" rel="stylesheet" />
    <link href="bower_components/jqplot/jquery.jqplot.css" rel="stylesheet" />
    <link href="bower_components/angular-ui-grid/ui-grid.css" rel="stylesheet" />
    <%--<link href="bower_components/bootstrap/dist/css/bootstrap-theme.css" rel="stylesheet" />--%>
</head>
<body>

    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#/home">Home</a></li>
                    <li><a href="#/chart">Chart</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <!--/.nav-collapse -->
        </div>
    </nav>

    <div class="container" data-ng-app="app">

        <div class="starter-template" data-ng-view>

        </div>

    </div>








    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/jqplot/jquery.jqplot.js"></script>
    <script src="bower_components/jqplot/plugins/jqplot.pieRenderer.js"></script>
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-route/angular-route.js"></script>
    <script src="bower_components/angular-ui/build/angular-ui.js"></script>
    <script src="bower_components/jqplot/plugins/jqplot.dateAxisRenderer.js"></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
    <script src="bower_components/angular-bootstrap/ui-bootstrap.js"></script>
    <script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
    <script src="bower_components/angular-ui-chart/src/chart.js"></script>
    <script src="bower_components/angular-ui-grid/ui-grid.js"></script>

    <script src="app.js"></script>
    <script src="app/controllers/main-controller.js"></script>
    <script src="app/controllers/chart-controller.js"></script>
    <script src="app/controllers/home-controller.js"></script>
    <script src="app/controllers/city-controller.js"></script>
    <script src="app/controllers/users-controller.js"></script>
    <script src="app/factory/weather-factory.js"></script>
    <script src="app/directives/meteograph-directive.js"></script>
    <script src="app/factory/users-factory.js"></script>

</body>
</html>

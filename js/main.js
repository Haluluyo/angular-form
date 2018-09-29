angular.module('myApp', [])
    .controller("SignUpController", function($scope){
        $scope.userdata = {

        }

        $scope.submitForm = function(){
            console.log($scope.userdata)
            if($scope.signUpForm.$invalid){
                alert('信息有误！')
            }else{
                alert('表单提交成功！')
            } 
        }
    })
    .directive('compare',function(){
        var o = {};
        o.strict = 'AE'
        o.scope = {
            orgText: '=compare'
        }
        o.require = 'ngModel';
        o.link = function(sco, ele, att, con){ //作用域， 元素， 属性，controller
            con.$validators.compare = function(value){
                return value == sco.orgText;
            }
            sco.$watch('orgText', function(){
                con.$validate() //$validate 验证
            })
        }
        return o
    })

    /*
    .directive('compare',function(){ //定义指令compare 与页面compare属性一致
        var o={};
        o.strict='AE'; //定义匹配模式为属性与元素
        o.scope={
            orgText: '=compare'  //= 实现orgText 与前台compare属性值的绑定
        }
        o.require = 'ngModel'; //将该控制器注入到‘ng-Model’指令中  会在该元素上查找ng-Model
        o.link = function(sco,ele,att,con){
            con.$validator.compare = function(v){  //为验证器添加compare方法（这个地方的compare与指令compare前台属性compare无关，仅是验证器的一个方法名，与前台$error.compare有关）
                return v == sco.orgText;  //比较该元素传入参数（该标签ng-model绑定值）与orgText的值（compare属性值）返回true或false
            };
            sco.$watch('orgText',function(){ //监听（orgText值有变化就运行该方法）
                con.$validate(); //调用该标签的验证
            })
        };
        return o;
    })

    */
<template>
    <div id="wrap">
			<div id="top_content">
					<div id="header">
						<div id="rightheader">
							<p>
								2009/11/20
								<br />
							</p>
						</div>
						<div id="topheader">
							<h1 id="title">
								<a href="#">main</a>
							</h1>
						</div>
						<div id="navigation">
						</div>
					</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>
						注册
					</h1>
						<table cellpadding="0" cellspacing="0" border="0"
							class="form_table">
							<tr>
								<td valign="middle" align="right">
									用户名:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="username" v-model="username"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									真实姓名:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="realname" v-model="realname" />
								</td>
							</tr>
              <tr>
								<td valign="middle" align="right">
									电话:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="phone" v-model="phone"/>
								</td>
							</tr>
              <!--<tr>-->
								<!--<td valign="middle" align="right">-->
									<!--头像:-->
								<!--</td>-->
								<!--<td valign="middle" align="left">-->
									<!--<input type="file" name="pic"/>-->
								<!--</td>-->
							<!--</tr>-->
							<tr>
								<td valign="middle" align="right">
									密码:
								</td>
								<td valign="middle" align="left">
									<input type="password" class="inputgri" name="pwd" v-model="password"/>
								</td><tr>
								<td valign="middle" align="right">
									确认密码:
								</td>
								<td valign="middle" align="left">
									<input type="password" class="inputgri" name="pwd" v-model="rpassword"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									性别:
								</td>
								<td valign="middle" align="left">
									男
									<input type="radio" class="inputgri" name="sex" value="m" checked="checked" @click="gender=0"/>
									女
									<input type="radio" class="inputgri" name="sex" value="f" @click="gender=1"/>
								</td>
							</tr>

						</table>
						<p>
							<input type="submit" class="button" value="Submit" @click="user_reg"/>
						</p>
				</div>
			</div>
			<div id="footer">
				<div id="footer_bg">
				ABC@126.com
				</div>
			</div>
		</div>
</template>

<script>
    export default {
        name: "register",
        data(){
            return{
                username:"",
                realname:"",
                phone:"",
                pic:"",
                password:"",
                gender:"0",
                rpassword:""
            }
        },
        methods:{
          user_reg(){
            this.$axios({
              url:"http://127.0.0.1:8000/ems/user/",
              method:"post",
              data:{
                username:this.username,
                realname:this.realname,
                phone:this.phone,
                pic:this.pic,
                password:this.password,
                rpassword:this.rpassword,
                gender:this.gender
              }
            }).then(res=>{
              console.log(res.data);
              if(res.data.message){
                alert('注册成功');
                //成功跳转
                this.$router.push("/login")
              }
            }).catch(error=>{
              this.$message.error("用户填写错误")
            })
          },
        }
    }
</script>

<style scoped>

</style>


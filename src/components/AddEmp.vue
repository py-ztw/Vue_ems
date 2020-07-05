<template>
    <div id="wrap">
			<div id="top_content">
					<div id="header">
						<div id="rightheader">
							<p>
								2009/11/20
                <br>
                <router-link to="/home">首页</router-link>

								<br />
							</p>
						</div>
						<div id="topheader">
							<h1 id="title">
								<a href="#">Add Emp</a>
							</h1>
						</div>
						<div id="navigation">
						</div>
					</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>
						add Emp info:
					</h1>
						<table cellpadding="0" cellspacing="0" border="0"
							class="form_table">
							<tr>
								<td valign="middle" align="right">
									name:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="name" v-model="empname"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									photo:
								</td>
								<td valign="middle" align="left">
									<input type="file" name="photo" ref="pics"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									salary:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="salary" v-model="salary"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									Gender:
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
							<input type="submit" class="button" value="Confirm" @click="addemp"/>
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
        name: "AddEmp",
        data(){
          return {
            empname:"",
            gender:"0",
            pic:"",
            salary:"",
          }
        },
        methods:{
          addemp(){
              let formdata = new FormData();
              formdata.append("empname",this.empname);
              formdata.append("salary",this.salary);
              formdata.append("pic",this.$refs.pics.files[0],);
              formdata.append("gender",this.gender);
              this.$axios({
              url:"http://127.0.0.1:8000/ems/emp/",
              method:"post",
              data:formdata,
                headers:{
                  'content-type':'multipart/form-data'
                }
            }).then(res=>{
              console.log(res.data);
              if(res.data){
                  if(confirm('添加成功，是否继续添加')){
                    location.reload()
                  }else {
                    this.$router.push("/home")
                  }
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

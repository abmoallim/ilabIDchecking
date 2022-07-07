let StudentURL= "https://localhost:7121/api/Students"

window.onload = function() {
    document.getElementById("input-value").focus();
  }

$("#input-value").on('change',function(){
    let ID = $("#input-value").val();
    getStudent(ID)

    
      
})

function getStudent(ID_number){
    
    $.ajax({  
        url: 'https://localhost:7121/api/StudentPhoto/StudentPhoto/ID Number?ID_number='+ID_number,  
        type: 'POST',  
        dataType: 'json',  
        success: function (data ) {
            
            $("#P-img").attr('src',data.imgSrc);

            $(".p-name").html(data.name)
            $(".p-id").html(data.iD_no)
            $(".p-program").html(data.program)
            // Convert the date to local date
            let issue =new Date(data.issue)
            let issuedate = issue.toLocaleDateString()
            console.log(issuedate.toString('dd-MM-yyyy'));
            $(".p-issue").html(issuedate)
            let Exp =new Date(data.exp)
            let ExpDate = Exp.toLocaleDateString()
            
            $(".p-EXP").html(ExpDate)

            // re load after 5 seconds
            setTimeout(function () {
                window.location.reload()
            }, 3000);
            
            
        }
      });
}

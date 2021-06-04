function compute() {
  var ip = document.getElementById("cidr").value;
  var mask = ip.split("/");

  if (mask[1] == 0 || mask[1]==32) {
    if (!alert('Enter a Valid Classless IP')) {
      window.location.reload();
    }
  }
   else {
    var block_id = mask[1];
    var host_id = 32 - mask[1];

    var total_no_host = Math.pow(2, host_id);
    var total_no_host_assignable = Math.pow(2, host_id) - 2;

    var ret_mask;
    switch (mask[1]) {
      case "0":
        ret_mask = "0.0.0.0";
        break;
      case "1":
        ret_mask = "128.0.0.0";
        break;
      case "2":
        ret_mask = "192.0.0.0";
        break;
      case "3":
        ret_mask = "224.0.0.0";
        break;
      case "4":
        ret_mask = "240.0.0.0";
        break;
      case "5":
        ret_mask = "248.0.0.0";
        break;
      case "6":
        ret_mask = "252.0.0.0";
        break;
      case "7":
        ret_mask = "254.0.0.0";
        break;
      case "8":
        ret_mask = "255.0.0.0";
        break;
      case "9":
        ret_mask = "255.128.0.0";
        break;
      case "10":
        ret_mask = "255.192.0.0";
        break;
      case "11":
        ret_mask = "255.224.0.0";
        break;
      case "12":
        ret_mask = "255.240.0.0";
        break;
      case "13":
        ret_mask = "255.248.0.0";
        break;
      case "14":
        ret_mask = "255.252.0.0";
        break;
      case "15":
        ret_mask = "255.254.0.0";
        break;
      case "16":
        ret_mask = "255.255.0.0";
        break;
      case "17":
        ret_mask = "255.255.128.0";
        break;
      case "18":
        ret_mask = "255.255.192.0";
        break;
      case "19":
        ret_mask = "255.255.224.0";
        break;
      case "20":
        ret_mask = "255.255.240.0";
        break;
      case "21":
        ret_mask = "255.255.248.0";
        break;
      case "22":
        ret_mask = "255.255.252.0";
        break;
      case "23":
        ret_mask = "255.255.254.0";
        break;
      case "24":
        ret_mask = "255.255.255.0";
        break;
      case "25":
        ret_mask = "255.255.255.128 ";
        break;
      case "26":
        ret_mask = "255.255.255.192 ";
        break;
      case "27":
        ret_mask = "255.255.255.224 ";
        break;
      case "28":
        ret_mask = "255.255.255.240 ";
        break;
      case "29":
        ret_mask = "255.255.255.248 ";
        break;
      case "30":
        ret_mask = "255.255.255.252 ";
        break;
      case "31":
        ret_mask = "255.255.255.254 ";
        break;
      case "32":
        ret_mask = "255.255.255.255 ";
        break;

    }


    var network_id = mask[0].split(".")
    var mask_id = ret_mask.split(".")

    var first = network_id[0] & mask_id[0]
    var second = network_id[1] & mask_id[1]
    var third = network_id[2] & mask_id[2]
    var fourth = network_id[3] & mask_id[3]

    var networkID = first + '.' + second + '.' + third + '.' + fourth + '/' + mask[1]

    var last = fourth + total_no_host - 1
    var last_ip = first + '.' + second + '.' + third + '.' + last

    var first_ip = first + '.' + second + '.' + third + '.' + fourth



    document.getElementById("answer1").innerHTML = '<h3 class="pp">Network ID : <span><strong>' + networkID + '</strong></span></h3>'
    document.getElementById("answer2").innerHTML = '<h3 class="pp">Default Subnet Mask : <span><strong>' + ret_mask + '</strong></span></h3>'
    document.getElementById("answer3").innerHTML = '<h3 class="pp">First IP : <span><strong>' + first_ip + '</strong></span></h3>'
    document.getElementById("answer4").innerHTML = '<h3 class="pp">Last IP : <span><strong>' + last_ip + '</strong></span></h3>'
    document.getElementById("answer5").innerHTML = '<h3 class="pp">Total No. Of Host Possible : <span><strong>' + total_no_host + '</strong></span></h3>'
    document.getElementById("answer6").innerHTML = '<h3 class="pp">Total No. Of Host Assignable : <span><strong>' + total_no_host_assignable + '</strong></span></h3>'



  }
}



var form = document.getElementById("myForm");

function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);

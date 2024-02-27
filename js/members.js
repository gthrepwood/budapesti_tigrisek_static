var result = "";

function show_all_members(members) {
  result +=
    '<div class="divTable" style="border: 0px solid #000" id="all_members">';
  result += '<div class="divTableBody">';
  members.forEach(show_dan);
  result += "</div></div>";

  return result;
}

function show_dan(obj) {
  result += '<div class="divTableRow">';

  var link =
    '<div class="divTableCell"> $2<br/> <img src="belts/$1.jpeg"> </div>';

  result += link.replace("$2", obj[0]).replace("$1", slugify(obj[0], true));

  result += '<div class="divTableCell">';
  obj[1].forEach(show_members);
  result += "</div>";
  result += '<div class="divTableCell"></div>';
  result += "</div>";
}

function show_members(obj) {
  var v = `<span onclick='openmember("@1","@2")'>
    <img src="members/photo/@1.jpeg" width=20 height=20 id="myImg" onerror="this.style.display='none'" class="zoom">
      @2
    </span>, &nbsp;&nbsp;&nbsp; `;
  v = v.replace(/@1/g, slugify(obj, true)).replace(/@2/g, obj);
  result += v;
}

function openmember(name, full_name) {
  window.open(
    "show_member.html?name=" + name + "&fname=" + full_name,
    "member_window",
    "width=800,height=500"
  );
}

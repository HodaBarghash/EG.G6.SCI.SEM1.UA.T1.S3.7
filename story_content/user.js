function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64IHS0KM6KT":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyztR9I1wpZ1LUXfihwvGjuJVxEV5-H71UK4t3Hjz5Uf-NFQUppfRRjUmHfWrEvPRKj/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v3q1attempts:player.GetVar("v3q1attempts"),v3q1answeredcorrect:player.GetVar("v3q1answeredcorrect")})
	}
	)
}


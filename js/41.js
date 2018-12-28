function AreaEllipse()
{
	var radiusX = parseInt(document.ellipseForm.RadiusX.value)
	var radiusY = parseInt(document.ellipseForm.RadiusY.value)

	var area = Math.PI * radiusX * radiusY;

	var r = "Area: " + area

	document.getElementById("result").innerText = r
	document.getElementById("result").style = "margin-left: 30px; margin-top: 8px; border: 1px solid black; width: " + (r.length * 7) + "px;"
}

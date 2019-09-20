
$(document).ready(function() {

	$("#productWarranty").change(function() {
		if ($(this).val() == "Yes") {
			$("#pmsn").show();
			$("#pwarrantyPeriod").show();

		} else {
			$("#pmsn").hide();
			$("#pwarrantyPeriod").hide();
		}
	});
});

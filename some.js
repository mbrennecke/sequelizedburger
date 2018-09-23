	$.get("/api/providers", function (data) {
		providers = data;
	}).then(function () {
		console.log($("#client-ui"));
			var dropdown = '<div class="dropdown d-flex justify-content-center"><button class="btn btn-secondary dropdown-toggle btn-lg" type="button" id="providerid" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Please select your Provider</button><div class="dropdown-menu" aria-labelledby="providerid">';
			for (var i = 0; i < providers.length; i++) {
				var prov = '<a class="dropdown-item" href="/provider/' + providers[i].id + '" data-val="' + providers[i].id + '">' + providers[i].providerBusinessName + '</a>';
				console.log(dropdown, prov);
				dropdown = dropdown + prov;
			}
			$("#client-ui").html(dropdown + '</div></div>');
	});

});
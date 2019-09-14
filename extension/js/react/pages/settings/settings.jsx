class Settings extends React.Component {
	render() {
		let tabs = [{
			label: "About",
			class: About
		}]

		return (
			<div class="section">
				<div class="container-header">
					<h1>Roblox+ Settings</h1>
				</div>
				<div>
					<VerticalTabs tabs={tabs} />
				</div>
			</div>
		);
	}
}

storage.get("settings-page-v2-enabled", function(enabled) {
	if (!enabled) {
		return;
	}
	
	var container = $("<div id=\"rplus-settings\">");
	$("#user-account").hide().after(container);
	ReactDOM.render(<Settings />, container[0]);
});

// WebGL3D
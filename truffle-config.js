module.exports = {
	networks: {
		development: {
			host: "127.0.0.1",
			port: 7545,
			network_id: "*"
		},
		"live": {
			network_id: 1,
			host: "127.0.0.1",
			port: 8546   // Different than the default below
		  }
	},
	solc: {
		optimizer: {
			enabled: true,
			runs: 200
		}
	}	
}
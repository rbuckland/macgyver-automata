{ "rules" : [
  {"src_addr": "261.888.22.11", "src_port": "ANY", "dst_addr": "ANY", "dst_port": "TCP_7889", "direction": "both", "action": "allow", "log": true, "flow_id": "F17", "spg": "Dept X"},
  {"src_addr": "261.888.22.11", "src_port": "ANY", "dst_addr": "501.191.10.4", "dst_port": "TCP_7990", "direction": "single", "action": "allow", "log": "true", "flow_id": "F17", "spg": "System Prov Y"},
  {"src_addr": "261.888.22.11", "src_port": "ANY", "dst_addr": "501.191.10.3", "dst_port": "TCP_7990", "direction": "single", "action": "allow", "log": "true", "flow_id": "F17", "spg": "System Prov Y"},
  {"src_addr": "261.888.22.12", "src_port": "ANY", "dst_addr": "501.191.10.4", "dst_port": "TCP_7990", "direction": "single", "action": "allow", "log": "true", "flow_id": "F17", "spg": "System Prov Y"},
  {"src_addr": "261.888.22.12", "src_port": "ANY", "dst_addr": "501.191.10.3", "dst_port": "TCP_7990", "direction": "single", "action": "allow", "log": "true", "flow_id": "F17", "spg": "System Prov Y"}
] }

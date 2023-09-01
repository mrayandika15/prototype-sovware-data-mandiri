function createData(status, name, agentNumber, lastUpdated, updateAgents) {
  return {
    status,
    name,
    agentNumber,
    lastUpdated,
    updateAgents,
  };
}

const classTableRowsData = [
  createData("Bad Health", "bignifi_agent1", 6, "7 months ago", ""),
  createData(
    "Unknown Health",
    "s2re-agent-cpp-v1",
    0,
    "No flows has been published yet",
    ""
  ),
  createData("Good Health", "s2re-agent-cpp-v2", 1291, "5 months ago", ""),
  createData("Concerning Health", "s2re-agent-java-v1", 5, "7 months ago", ""),
  createData("Good Health", "s2re-agent-java", 9, "7 months ago", ""),
  createData("Concerning Health", "s2re-agent-java-v2", 5, "7 months ago", ""),
  createData("Good Health", "s2re-agent-java-v2", 9, "7 months ago", ""),
  createData("Concerning Health", "s2re-agent-java-v3", 5, "7 months ago", ""),
  createData(
    "Unknown Health",
    "s2re-agent-cpp-v3",
    0,
    "No flows has been published yet",
    ""
  ),
];

export default classTableRowsData;

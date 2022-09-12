import apiClient from "@/useApiClient";

export const allTraining = async (limit, skip) => {
  const query = `query  {
    allTraining(first:${limit}, skip:${skip}){
      topic
        id,
      createdAt,
      theme,
      description,
      cost,
      startDate,
      endDate,
      modeOfDelivery
      status
    }
  }`;

  const response = await apiClient(query);

  const data = await response.json();

  return data.data.allTraining;
};


export const appliedTraining = async () => {
  const query = `query {
    allTrainingApplication {
      createdAt,
      requestType,
      participantNo,
      statusFeedback,
      instituteId{
        instituteAbbreviation
      }
    }
  }`;

  const response = await apiClient(query);

  const data = await response.json();

  return data.data.allTrainingApplication;
};

export const getAllInstitutions = async () => {
  const query = `query {
    allInstitute{
      id
      instituteName
      instituteAbbreviation
    }
  }`;

  const response = await apiClient(query);

  const data = await response.json();

  return data.data.allInstitute;
};

export const createTraining = async (training) => {
  const query = `mutation {
    createTraining(
      slotsRemaining:200, 
      topic: "${training.topic}", 
      instituteId: "${training.instituteId}", 
      cost: ${training.cost}, 
      participantLimit: ${training.participantLimit}, 
      description: "${training.description}", 
      modeOfDelivery:${training.modeOfDelivery}, 
      endDate: "${training.startDate}", 
      startDate: "${training.endDate}",
      extraVenueName: "${training?.venue || ''}",
      theme:"${training.theme}") {
     createTraining {
      id,
      cost
    }
    }
  }`;

  const response = await apiClient(query);

  const data = await response.json();

  return data.data.createTraining;
};

export const getCreatedTraining = async (instituteId, limit, skip) => {
  const query = `query  {
    specificTraining(id:"${instituteId}", first:${limit}, skip:${skip}){
      topic
        id,
      createdAt,
      theme,
      description
      startDate,
      endDate,
      modeOfDelivery,
      status,
    }
  }`;

  const response = await apiClient(query);

  const data = await response.json();

  return data.data.specificTraining;
};
export const getSingleTraining = async (trainingId) => {
  const query = `query  {
    singleTraining(id:"${trainingId}"){
      topic
        id,
      createdAt,
      theme,
      description
      startDate,
      endDate,
      modeOfDelivery,
      status,
    }
  }`;

  const response = await apiClient(query);

  const data = await response.json();

  return data.data.singleTraining[0];
};

export const newTraining = async () => {
  const query = `query  {
    allTraining(first:2){
      topic
        id,
      createdAt,
      startDate,
      cost,
      endDate,
      modeOfDelivery
      status
    }
  }`;

  const response = await apiClient(query);

  const data = await response.json();

  return data.data.allTraining;
};

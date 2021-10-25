/*
    User Management Helpers
*/

import { ACTIONS } from "../constants/UsermanagementConstants";

/* General */

// View
export function getViewAccessRight(permissions){
  return !!permissions?.includes(ACTIONS.VIEW);
}

// Add/Edit
export function getAddEditAccessRight(permissions){
  return !!permissions?.includes(ACTIONS.ADD_EDIT);
}

// Add
export function getAddAccessRight(permissions){
  return !!permissions?.includes(ACTIONS.ADD);
}

// Edit
export function getEditAccessRight(permissions){
  return !!permissions?.includes(ACTIONS.EDIT);
}

// Delete
export function getDeleteAccessRight(permissions){
  return !!permissions?.includes(ACTIONS.DELETE);
}

// Correction
export function getCorrectionAccessRight(permissions){
  return !!permissions?.includes(ACTIONS.CORRECTION);
}

// Ticket
export function getTicketAccessRight(permissions){
  return !!permissions?.includes(ACTIONS.TICKET);
}

// Reject
export function getRejectAccessRight(permissions){
  return !!permissions?.includes(ACTIONS.REJECT);
}

// Arrivals
export function getArrivalsAccessRight(permissions){
  return !!permissions?.includes(ACTIONS.ARRIVALS);
}

// Transfer
export function getTransferAccessRight(permissions){
  return !!permissions?.includes(ACTIONS.TRANSFER);
}

// Acknowledge
export function getAcknwledgeAccessRight(permissions){
  return !!permissions?.includes(ACTIONS.ACKNOWLEDGE);
}

// Clone
export function getCloneAccessRight(permissions){
  return !!permissions?.includes(ACTIONS.CLONE);
}

//ING and NEG
export function getIngAccessRight(permissions){
  return !!permissions?.includes(ACTIONS.INGREDIENT_NEG);
}


export function parseAddUserData(data, list, userID){

  const { username, email, active } = data;

  let locations = [];
  let defaultLocation = null;
  list && list.forEach((obj) => {
    locations.push({
      locationId: obj.value,
      roles: obj?.roles?.map(el => el.value) || []
    });

    if(!!obj?.isDefault){
      defaultLocation = obj.value;
    }

  });

  let params = { username, email, active, defaultLocation, locations };
  if(!!userID){
    params = { ...params, userID }
  }

  return params;
}

export function parseUserLocationsToView(list, defaultLocation){

  let locations = [];
  list && list.forEach((obj) => {

    const location = obj?.location;
    const userRoles = location?.userRoles;

    let roles = [];

    userRoles && userRoles.forEach((role) => {
      roles.push({
        text: role?.roleName,
        value: role?.roleID  
      })
    })

    locations.push({
      text: location?.locationName,
      value: location?.locationID,
      isDefault: !!defaultLocation && !!location && location?.locationID === defaultLocation,
      roles
    })
  });

  return locations;
}

export function updateRecord(list, record){
  if(!record){
    return list;
  }

  let records = JSON.parse(JSON.stringify(list || {}));


  let index = records?.result.findIndex(el => el.userID === record?.userID);
  if(index !== -1){
    records.result = [...records?.result.slice(0, index), record, ...records?.result.slice(index+1)];
  }
  return records;
}


/*
  Roles Helper
*/

// Parse request payload for add/edit
export function parseAddRoleData(data, list){

  const { roleID, roleName, active } = data || {};
  let permissions = [];

  for(let i=0; i<list?.length; i++){
    const { check, entities } = list[i];
    if(!!check){
      for(let j=0; j<entities?.length; j++){
        const { toggle, entityId, actionNames } = entities[j];
        if(!!toggle){
          for(let k=0; k<actionNames?.length; k++){
            let flag = actionNames[k]?.check;
            let actionID = actionNames[k]?.actionId;

            if(!!flag){
              permissions.push({
                actionID,
                entityID: entityId
              })
            }
          }
        }
      }
    }
  }

  return { roleID, roleName, active, permissions }
}

// Parse request for to view
export function parseViewRoleData(permissions , data){

  const combinations = data.map(el => el.entityID + "" + el.actionID);
  let list = [...permissions];

  for(let i=0; i<list?.length; i++){
    const { entities } = list[i];
    let checkEntities = false;

    for(let j=0; j<entities?.length; j++){
      const { entityId, actionNames } = entities[j];
      let checkActions = false;

      for(let k=0; k<actionNames?.length; k++){
        let actionID = actionNames[k]?.actionId;
        let key = entityId + "" + actionID;

        const exist = combinations.includes(key);
        list[i].entities[j].actionNames[k].check = !!exist;
        if(exist){
          checkActions = true;
        }
      }

      list[i].entities[j].toggle = !!checkActions;
      if(!!checkActions){
        checkEntities = true;
      }
    }

    list[i].check = !!checkEntities;
  }

  return list;
}
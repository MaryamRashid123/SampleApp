/*
    Feedyard Helpers
*/
import { WEB_FEEDYARD_PARAM } from "@cattleview/common/src/constants/GenericConstants";

export function getRoute(str){
  return `/:${WEB_FEEDYARD_PARAM}/${str}`;
}

export function getFeedyardRoute(route, data=null){
  const id = 2;
  return route.replace(`:${ WEB_FEEDYARD_PARAM }`, id);
}

export function isFeedyardExist(){
  return true;
}

export function getURL(){
  if(isFeedyardExist()){
    return true;
  }
}

export function getAvailbleUserPermissions(allPermissions, userPermissions){

  let userActions = {};
  for(let i=0; userPermissions && i<userPermissions.length; i++){
    const { entityID, actionID } = userPermissions[i];
    if(!!userActions[entityID]){
      userActions[entityID].push(actionID);
    }else{
      userActions[entityID] = [actionID];
    }
  }

  // Categories & entities according to given user permissions
  // let categories = [];
  // for(let i=0; allPermissions && i<allPermissions.length; i++){
  //   const { categoryName, label, entities } = allPermissions[i];

  //   let userEntities = [];
  //   for(let j=0; j<entities.length; j++){
  //     const { entityId, entityName, label, url } = entities[j];
  //     let actions = userActions[entityId];
  //     if(!!actions?.length){
  //       userEntities.push({ entityId, entityName, label, url, actions });
  //     }
  //   }

  //   if(!!userEntities?.length){
  //     categories.push({ categoryName, label, entities: userEntities });
  //   }
  // }

  return userActions;
}

export function getUserMenus(children, permissions){

  let arr = [];
  for(let i=0; i<children.length; i++){
    const { id } = children[i];
    if(!!permissions && !!permissions[id] && !!permissions[id].length){
      arr.push(children[i]);
    }
  }

  return arr;
}

export function getSubMenus(menus){
  let columns = menus.length >=12? 3: (menus.length >= 6? 2: 1);
  let rows = Math.ceil(menus.length/columns);

  let updatedMenus = [];
  let index = 0;
  for(let i=0; i<columns; i++){
    updatedMenus.push(
      menus.slice(index, index+rows)
    );
    index = index+rows;
  }

  return updatedMenus
}
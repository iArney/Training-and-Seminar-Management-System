 /**
  * This function checks if the route being naviagated
  * is authorized
  * @param {*} routePermissions 
  * @param {*} userPermissions 
  * @returns {Boolean} 
  */
 const hasRoutePermission = (routePermissions, userPermissions = []) => {
    //if user permissions matches all route permsions 
    //then return true 
   // const permissions = userPermissions.map(permission => permission.permissionCode)
    /**
     * If all router Permissions are contained in userPermisions 
     */
   return routePermissions.every(value => userPermissions.includes(value))
}

export default hasRoutePermission
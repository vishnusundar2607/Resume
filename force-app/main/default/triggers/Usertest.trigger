trigger Usertest on User (before delete) {
    system.debug('test');

}
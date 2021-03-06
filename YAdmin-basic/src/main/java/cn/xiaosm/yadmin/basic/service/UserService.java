/**
 * Copyright: 2019-2020，小树苗(www.xiaosm.cn)
 * FileName: UserService
 * Author:   Young
 * Date:     2020/6/13 14:40
 * Description:
 * History:
 * <author>          <time>          <version>          <desc>
 * Young         修改时间           版本号             描述
 */
package cn.xiaosm.yadmin.basic.service;

import cn.xiaosm.yadmin.basic.entity.ResponseBody;
import cn.xiaosm.yadmin.basic.entity.User;
import cn.xiaosm.yadmin.basic.entity.UserLoginTrack;
import cn.xiaosm.yadmin.basic.entity.UserOpen;
import cn.xiaosm.yadmin.basic.entity.dto.UserDTO;
import cn.xiaosm.yadmin.basic.entity.enums.UserOpenType;

import java.util.List;
import java.util.Set;

/**
 * 〈一句话功能简述〉
 * 〈〉
 *
 * @author Young
 * @create 2020/6/13
 * @since 1.0.0
 */
public interface UserService extends BaseService<User> {

    ResponseBody getById(Integer id);

    List<UserOpen> getUserOpenByUserId(Integer userId);

    boolean addUserOpen(UserOpen userOpen);

    boolean modPassword(User user);

    boolean modPassword(User user, String password);

    boolean modPassword(User user, String password, boolean keep);

    void defaultPass(User user);

    int removeById(Integer id);

    int removeByIds(Set<Integer> ids);

    UserDTO getByUsername(String username);

    UserDTO getByUsername(String openId, UserOpenType loginType);

    User login(User user);

    List<UserLoginTrack> listOfTrack(Integer userId, Integer size);

    boolean addLoginTrack(Integer userId, String ip);

    boolean revokeUserOpen(UserOpen userOpen);
}
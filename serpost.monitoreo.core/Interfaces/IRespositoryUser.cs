using serpost.monitoreo.core.DTOs;
using System.Threading.Tasks;

namespace serpost.monitoreo.core.Interfaces
{
    public interface IRepositoryUser
    {
        Task<UserSignIn> Authenticate(UserLoginDTO userLogin);
    }
}

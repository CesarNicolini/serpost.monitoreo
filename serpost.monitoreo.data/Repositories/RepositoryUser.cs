using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using serpost.monitoreo.core.Credentials;
using serpost.monitoreo.core.DTOs;
using serpost.monitoreo.core.Interfaces;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace serpost.monitoreo.data.Repositories
{
    public class RepositoryUser: IRepositoryUser
    {
        
        private readonly EFDataContext _dbContext;
        private readonly jwtCredentials _jwtCredentials;
        public RepositoryUser(EFDataContext dbContext,
            IOptions<jwtCredentials> jwtCredentialsOptions)
        {
            _dbContext = dbContext;
            _jwtCredentials = jwtCredentialsOptions.Value;
        }


        public async Task<UserSignIn> Authenticate(UserLoginDTO userLogin)
        {
            var user = await _dbContext.usuario.
                        Where(us => us.username.Equals(userLogin.username) &&
                                    us.password.Equals(userLogin.password))
                       .Select(us => new UserSignIn
                       {
                           username = us.username,
                           roles = new List<string>()
                       }).FirstOrDefaultAsync<UserSignIn>();

            // return null if user not found
                if (user == null)   
                return null;

            List<Claim> claims = new List<Claim>  {
                        new Claim(ClaimTypes.Name, user.username),
                };

            foreach (var role in user.roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_jwtCredentials.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(
                    claims
                ),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.token = tokenHandler.WriteToken(token);

            return user;
        }
    }
    
}
